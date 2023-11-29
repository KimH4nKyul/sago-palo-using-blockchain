// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract ECommerceStore {
    mapping(address => mapping(uint => Product)) products;
    mapping(uint => address) productOwner;

    // TODO: enum은 기본적으로 정수형으로 처리됨. 불필요한 형 변환으로 가스 비용이 추가 되므로, 최적화 필요
    enum ProductCondition {
        New,
        Used
    }

    uint public productId;

    struct Product {
        uint id;
        string name;
        string category;
        string imageLink;
        string descLink;
        uint startTime;
        uint price;
        ProductCondition condition;
        address buyer;
    }

    constructor() {
        productId = 0;
    }

    function add(
        string memory _name,
        string memory _category,
        string memory _imageLink,
        string memory _descLink,
        uint _startTime,
        uint _price,
        ProductCondition _condition
    ) public {
        /* 
        이더리움 가상 머신의 세 가지 구성요소 
        1. 스토리지
        - 모든 컨트랙트 상태 변수가 스토리지에 저장된다.
        - 모든 컨트랙트에는 자체 스토리지가 있는데 비용이 꽤 비싸다. 
        2. 메모리 
        - 임시 값을 담는다.
        - 컴파일러는 구조체 등이 스토리지인지 메모리인지 명시하게 한다.
        3. 콜 스택
        - 소규모의 지역 변수를 담는다.
        */
        productId += 1;
        Product memory product = Product(
            productId,
            _name,
            _category,
            _imageLink,
            _descLink,
            _startTime,
            _price,
            _condition,
            address(0)
        );

        products[msg.sender][productId] = product;
        productOwner[productId] = msg.sender;
    }

    function get(
        uint _productId
    )
        public
        view
        returns (
            uint id,
            string memory name,
            string memory category,
            string memory imageLink,
            string memory descLink,
            uint startTime,
            uint price,
            ProductCondition condition,
            address buyer
        )
    {
        address owner = productOwner[_productId];
        Product memory product = products[owner][_productId];

        return (
            product.id,
            product.name,
            product.category,
            product.imageLink,
            product.descLink,
            product.startTime,
            product.price,
            product.condition,
            product.buyer
        );
    }

    function buy(uint _productId) public payable {
        Product memory product = products[productOwner[_productId]][_productId];
        require(product.buyer == address(0), "Sold out");
        require(product.price <= msg.value, "Not enough price");

        product.buyer = msg.sender;

        products[productOwner[_productId]][_productId] = product;
    }
}

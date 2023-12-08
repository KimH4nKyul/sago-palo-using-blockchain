import { User } from '../../domain/user'

test('ID, PASSWORD로 생성될 수 있다.', () => {
  const id = 'test_id'
  const password = 'test_password'

  const user = User.create(id, password)

  expect(user.id).toBe(id)
  expect(user.password).toBe(password)
})

test('불러온 속성(ID, PASSWORD, Database ID)로 부터 변환될 수 있다.', () => {
  const id = 'test_id'
  const password = 'test_password'
  const dbId = 'test_dbId'

  const user = User.from(id, password, dbId)

  expect(user.id).toBe(id)
  expect(user.password).toBe(password)
  expect(user.dbId).toBe(dbId)
})

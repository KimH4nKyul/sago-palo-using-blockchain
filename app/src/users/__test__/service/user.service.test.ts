import { create } from '../../service/user.service'
import { FakeUserMongoRepository } from '../mock/fake.user.mongo.repository'

const userRepository = new FakeUserMongoRepository()

test('can create user', () => {
  const result = create(
    { userRepository },
    { id: 'test1', password: 'qwer123!@#' }
  )
  expect(result).toBe(true)
})

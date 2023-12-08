import { User } from '../../domain/user'
import { UserRepository } from '../../interface/user.repository'
import { FakeUserRepository } from '../mock/fake.user.repository'

const userRepository: UserRepository = new FakeUserRepository()

test('유저를 생성할 수 있다.', async () => {
  let user = User.create('test_id2', 'test_password2')
  user = await userRepository.create(user)

  expect(user.id).toBe('test_id2')
  expect(user.password).toBe('test_password2')
  expect(user.dbId).not.toBeNull()
})

test('ID로 유저를 찾을 수 있다.', async () => {
  let userId = 'test_id'
  const user = await userRepository.findById(userId)

  expect(user.id).toBe(userId)
})

test('모든 유저를 찾을 수 있다', async () => {
  const users = await userRepository.findAll()

  expect(users).not.toBeNull()
})

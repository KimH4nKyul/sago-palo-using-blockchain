import { User } from '../../domain/user'

test('can create user', () => {
  const user = User.create('test1', 'test1!')
  const id = user.id
  const password = user.password

  expect(id).toBe('test1')
  expect(password).toBe('test1!')
})

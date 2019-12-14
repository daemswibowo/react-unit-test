export const PREFIX = 'TODOS_';
export const GET = `${PREFIX}GET`;

export const getTodos = () => {
  return {
    type: GET,
    payload: {
      request: {
        url: '/todos'
      }
    }
  }
}

const connection = require('./connection');


const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  const { id, first_name, middle_name, last_name } = authorData;
  return {
    id: id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name
  }
}

const getAll =  async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name from authors'
  );
  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
    [id]
  );
  if (authors.length === 0 ) return null;

  const { firstName, middleName, lastName } = authors.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  })
}

module.exports = {
  getAll,
  findById
};

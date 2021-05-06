let json = {
    'id': 2
}

try {
    let user = JSON.stringify(json)
    console.log(user);
    if (!user.name) {
        throw new Error('В эти данных нет имени!')
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(` Мыполучили ошибку: ${error.name}`)
} finally {
    console.log('Я выполнюсь всегда')
}
console.log('next');

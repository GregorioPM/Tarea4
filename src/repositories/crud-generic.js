const listar = async({ model, include = [], where = {} }) => {
    console.log({ model, include, where });
    const lista = await model.findAll({ where, include });
    if (!lista) return null;
    return lista;
}

const actualizarGeneric = async({ model, id, body }) => {
    const object = await model.findByPk(id);
    if (!object) return null;
    for (const key in object) {
        const element = object[key];
        console.log({ element, key })
    }
    return object;
}

const paginate = async(model, pageSize, pageLimit, search = {}, order = [], transform) => {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;

        // create an options object
        let options = {
            offset: getOffset(page, limit),
            limit: limit,
        };

        // check if the search object is empty
        if (Object.keys(search).length) {
            options = { options, ...search };
        }

        // check if the order array is empty
        if (order && order.length) {
            options['order'] = order;
        }

        // take in the model, take in the options
        let { count, rows } = await model.findAndCountAll(options);

        // check if the transform is a function and is not null
        if (transform && typeof transform === 'function') {
            rows = transform(rows);
        }

        return {
            previousPage: getPreviousPage(page),
            currentPage: page,
            nextPage: getNextPage(page, limit, count),
            total: count,
            limit: limit,
            data: rows
        }
    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page, limit) => {
    return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total / limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}

module.exports = {
    listar,
    actualizarGeneric,
    paginate
}
export const BASE_URL = "http://localhost:8000/"

export const getURL = (name, id=null) => {
    const URLs = {
        LAYOUT: BASE_URL + "post/layout/",
        HOME_PAGE: BASE_URL + "post/home/",
        CATEGORY_PAGE: BASE_URL + `post/category/${id}/`,
        POST_DETAIL_PAGE: BASE_URL + `post/${id}/`,
    }
    return URLs[name]
}

const ACCEPT_JSON = {
    accept: 'application/json'
}

async function request(method, path, data, headers) {
    const options = {
        method,
        headers: {
            ...ACCEPT_JSON,
            ...headers
        }
    }

    if (typeof data != 'undefined') {
        options.body = JSON.stringify(data)
        options.headers['Content-Type'] = 'application/json'
    }

    const resp = await fetch(path, options)
    return resp
}

export async function getLayoutData(){
    return await request('GET', getURL('LAYOUT'))
}

export async function getHomePageData() {
    return await request('GET', getURL('HOME_PAGE'))
}

export async function getCategoryPage(categoryId) {
    return await request('GET', getURL('CATEGORY_PAGE', categoryId))
}

export async function getPostDetailPage(postId) {
    return await request('GET', getURL('POST_DETAIL_PAGE', postId))
}

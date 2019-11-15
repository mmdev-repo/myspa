const updateJwt = jwt => {
    console.log(jwt);
    return {
        type: 'MODIFY_JWT',
        payload: jwt
    }
}

export default updateJwt;
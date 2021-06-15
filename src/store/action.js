export let getListAction=(value)=>{
    return {
        type:'list',
        value,
    }
}
export let getAddAction=(value)=>{
    return {
        type:'add',
        value,
    }
}
export let getDetailAction=(value)=>{
    return {
        type:'detail',
        value,
    }
}
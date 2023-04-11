
export const onChange = (context: any, name: string, newValue: any, callback?: any) => {
    
    console.log(newValue)
    context.setState({ [name]: { ...context.state[name], value: newValue } }, callback && callback);
}
export const setInputHeight = (element: any, defualtHeight: string) => {
    if(element){
        const target = element.target ? element.target : element;
        target.style.height = defualtHeight;
        target.style.height = `${target.scrollHeight}px`;
    }
    // console.log('height')
}
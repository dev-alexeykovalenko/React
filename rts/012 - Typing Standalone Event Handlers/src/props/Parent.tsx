import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        alsdfg
    </ChildAsFC>
}

export default Parent;
import './Image.css'

const Image = (props) => {
    return (
        <div className='container'>
            <img Style="width: 100%; height: 20%;" src={props.photo} alt="My Pic"/>
            <h4 className='centered'>{props.txt}</h4>
        </div>
    )
}

export default Image
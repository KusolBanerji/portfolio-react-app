import Photo from '../media_files/Photo1-1.jpg'
import './Image.css'

const Image = () => {
    return (
        <div className='container'>
            <img Style="width: 100%;" src={Photo} alt="My Pic"/>
            <h4 className='centered'>KUSOL BANERJI</h4>
        </div>
    )
}

export default Image
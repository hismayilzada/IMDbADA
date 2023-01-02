import './UserInfo.scss'

const UserInfo = ({ imageValue, name, surname, bio, link, githubLink }) => {
    return (
        <div className='userInfo'>
            <div className='leftCard'>
                <img className='imgLeftCard' src={imageValue} alt={`${name}`} />
            </div>
            <div className='rightCard'>
                <h1 className='about'>{` ${name} ${surname}`}</h1>
                <div className='bio'>{bio}</div>
                <div className='links'>
                    <a href={link} className={'totalLinks webpage'}>Personal Webpage</a>
                    <a href={githubLink} className={'totalLinks github'}>Github</a>
                </div>
            </div>
        </div>
    )
}

export default UserInfo




const Card = ({name,avatar_url,company}) => {

    return ( <div className="github-profile">
    <img src={avatar_url} />
  <div className="info">
    <div className="name">{name}</div>
    <div className="company">{company}</div>
  </div>
  </div> )
}
  

export default Card

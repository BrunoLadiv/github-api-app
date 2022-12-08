import Card from "./Card.component";

const CardList = (props) => {
    console.log(props.user.user)
    
    
    
  return (
      <div>
           {props.user.user.map(user => <Card key={user.id} {...user}/>)}
      
        </div>
  );
};

export default CardList;

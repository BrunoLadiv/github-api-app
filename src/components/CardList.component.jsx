import Card from "./Card.component";

const CardList = ({users}) => {
    
  return (
      <div>
           {users.map((user)=><Card {...user}></Card>)}
      
        </div>
  );
};

export default CardList;

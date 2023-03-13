import './UserCard.css'

export const UserCard = (props) => {
    return (
        <div className="userCard">
            {/* name, gender, image , email */}
            <h1>{`${props.data.firstName} ${props.data.lastName}`}</h1>
            <img src={props.data.image} alt="" />
            <p>{`gender: ${props.data.gender}`}</p>
            <p>{`email: ${props.data.email}`}</p>
            {/* "firstName": "Terry",
        "lastName": "Medhurst", */}
        </div>
    )
}
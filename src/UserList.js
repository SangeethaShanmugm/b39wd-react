import { Msg } from './Msg';
import { Example } from './example';

export function UserList() {

  const users = [
    {
      name: "Sathish",
      pic: "https://scontent.fixm1-1.fna.fbcdn.net/v/t1.6435-9/121193596_2200160230128519_8049283258679180567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UMSDv1lTNF8AX9l0sMK&_nc_ht=scontent.fixm1-1.fna&oh=00_AT-PN6LtxpJWEgn1Lpr71JPig499DKWKrRB5sEYkwyyYEw&oe=6358B5E7",
    },
    {
      name: "Navyasri",
      pic: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "persis",
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "manish",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Sneha",
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
    }
  ];

  return (
    <div>
    <Example/>
      {users.map((user, index) => (
        <Msg key={index} name={user.name} pic={user.pic} />
      ))}

    </div>
  );
}

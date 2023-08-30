import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/7319030/pexels-photo-7319030.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="" 
                    className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">
                            Anna Hadassah
                        </span>
                        <span className="userShowUserTitle">
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitile">Hada99</span>
                    </div>

                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitile">18.01.2002 </span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitile">
                        +234 810 413 4272
                    </span>
                    </div>

                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitile">
                        Hada99@gmail.com
                    </span>
                    </div>

                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitile">
                        Lagos | Nigeria
                    </span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="hada99" 
                        className="userUpdateInput"
                        />
                      </div>  

                      <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" 
                        placeholder="hada99" 
                        className="userUpdateInput"
                        />
                      </div>

                      <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" 
                        placeholder="Hada99@gmail.com" 
                        className="userUpdateInput"
                        />
                      </div>

                      <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" 
                        placeholder="+234 810 413 4272" 
                        className="userUpdateInput"
                        />
                      </div>

                      <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" 
                        placeholder="Lagos | Nigeria" 
                        className="userUpdateInput"
                        />
                      </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/7319030/pexels-photo-7319030.jpeg?auto=compress&cs=tinysrgb&w=400" 
                            alt="" 
                            className="userUpdateImg" 
                            />
                            <label htmlFor="file"><Publish/></label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

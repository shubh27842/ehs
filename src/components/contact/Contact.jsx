import React from "react";
import tag1 from "../../images/tag4.png";
import tag2 from "../../images/tag5.png";
import tag3 from "../../images/tag6.png";
import EmailIcon from '@material-ui/icons/Email';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { useForm } from "react-hook-form";

const MySwal = withReactContent(Swal);

const Card = (props) => {
    return (
        <div className="contactCard p-5 mb-4">
            <img src={props.imgsrc} className="contactTagImg mx-auto d-flex" />
            <p className=" contactTitleText mb-0">{props.title}</p>
            <p className="contactCardText ">{props.desc}</p>
        </div>
    );
};
const CardL = (props) => {
    return (
        <div className="contactCard p-5 mb-3" >
            <img src={props.imgsrc} className="contactTagImg mx-auto  d-flex" style={{position: "relative",top: "-12px"}} />
            <p className=" contactTitleText  mb-0" style={{position: "relative",top: "-17px"}}>{props.title}</p>
            <p className="contactCardText " style={{position: "relative",top: "-17px"}}>{props.desc}</p>
        </div>
    );
};

const Contact = () => {

   

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: "onTouched"
    })

    const onSubmit = (data) => {
        //console.log(data);
        MySwal.fire({
            html: <div className="d-flex mt-2">
                    <EmailIcon style={{color: "#003459"}} />
                    <p className="ml-2" style={{color: "#003459"}}>Message Sent!</p>
                </div>,
                timer: 3000,
            scrollbarPadding: false,
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            
        })
    }

    return (
       <>
         <div className=" padding-10 contactTopBox" style={{ backgroundColor: "#F6F6F6"}}>
            <h2 className="contactHead ">Keep In Touch</h2>
            <div className="d-flex justify-content-sm-between flex-sm-row flex-column align-items-center ">
            <Card imgsrc={tag1} title="Call Us" desc="+91 9632418602" />
            <Card imgsrc={tag2} title="Email Us" desc="hello@ehsposters.com" />
            <CardL imgsrc={tag3} title="Location" desc="45, old Agarwal Nagar, Indore, MP" />
            </div>
        </div>
        <form className="contactFormBox p-sm-5 p-4 mx-auto mt-sm-5 mt-3 mb-sm-5 mb-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-inline-flex flex-column mr-sm-4 mr-0 mb-4 contactFormInputBox " >
            <input 
                type="text" 
                className="contactFormInput  w-100" 
                placeholder="First Name" 
                name="firstName"
                {...register("firstName",{
                            required: "**this field is required"
                })}
                />
                {errors.firstName && (<span className="text-danger ml-2   mt-0 errorMsgCheckout">{errors.firstName.message}</span>)}
            </div>
            <input 
                type="text" 
                className="contactFormInput mb-4" 
                placeholder="Last Name" 
                name="lastName"
                {...register("lastName")}
                 />
            <div className="d-flex flex-sm-row flex-column justify-content-between ">
                <div className="d-inline-flex flex-column mr-sm-4 mr-0 mb-4 contactFormInputBox" >
                <input 
                    type="email" 
                    className="contactFormInput  w-100" 
                    placeholder="Email"
                    name="email"
                    {...register("email",{
                        required: "**this field is required",
                        pattern: {
                            value: /^(?:\w+@\w+\.\w{2,3})$/,
                            message: "**enter valid email"
                        }
                    })}
                    />
                    {errors.email && (<span className="text-danger ml-2   mt-0 errorMsgCheckout">{errors.email.message}</span>)}
                    </div>
                <div  className="d-inline-flex flex-column  mr-0 mb-4 contactFormInputBox" >
            <input 
                type="number" 
                className="contactFormInput w-100" 
                placeholder="Mobile Number"
                name="mobile"
                {...register("mobile",{
                    required: "**this field is required",
                    minLength: {
                        value: 10,
                        message: "**please enter valid 10 digit mobile number"
                    },
                    maxLength: {
                        value: 10,
                        message: "**please enter valid 10 digit mobile number"
                    }
                })}
                />
                {errors.mobile && (<span className="text-danger ml-2   mt-0 errorMsgCheckout">{errors.mobile.message}</span>)}
            </div>
            </div>
            <div className="contactFormLabel">
                <label className="mb-3">You are : </label><br />
                <div className="d-flex justify-content-between flex-sm-row flex-column" style={{fontWeight: "500"}}>
                    <div className="mb-2">
                        <input type="radio" id="customer" className="align-baseline"  name="sender" value="customer" {...register("sender")} />
                        <label for="customer">Customer</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="Rcustomer" className="align-baseline" name="sender" value="Returning Customer" {...register("sender")} />
                        <label  for="Rcustomer">Returning Customer</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="Enthusiast" className="align-baseline" name="sender" value="Enthusiast" {...register("sender")} />
                        <label for="Enthusiast">Enthusiast</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="CasualVisitor" className="align-baseline" name="sender" value="CasualVisitor" {...register("sender")} />
                        <label for="CasualVisitor">Casual Visitor</label>
                    </div>
                </div>
            </div>
            <div className="contactFormLabel mt-3">
                <label className="mb-3">Subject Line : </label><br />
                <div className="d-flex justify-content-between flex-sm-row flex-column" style={{fontWeight: "500"}}>
                    <div className="mb-2">
                        <input type="radio" id="price" className="align-baseline"  name="Subject" value="Price and price list" {...register("subject")} />
                        <label for="price">Price and Price List</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="quotation" className="align-baseline" name="Subject" value="Quotation" {...register("subject")} />
                        <label  for="quotation">Quotation</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="invoice" className="align-baseline" name="Subject" value="Proforma Invoice" {...register("subject")} />
                        <label for="invoice">Proforma Invoice</label>
                    </div>
                    <div className="mb-2">
                        <input type="radio" id="general" className="align-baseline" name="Subject" value="General" {...register("subject")} />
                        <label for="general">General</label>
                    </div>
                </div>
            </div>
            <div className="contactFormLabel mt-3">
                <label className="mb-3">Attachment : </label><br />
                <input type="file" />
            </div>
            <div className="contactFormLabel mt-4 mb-4 ">
                <label className="mb-3" for="message">Message : </label><br />
                <textarea 
                    id="message" 
                    name="message"  
                    className="contactMessage mb-0 " 
                    {...register("message",{
                        required: "**this field is required",
                    })}>
                    </textarea>
                    {errors.message && (<span className="text-danger ml-2  mt-0 errorMsgCheckout">{errors.message.message}</span>)}
            </div>
            <button type="submit"  value="send" style={{
                width: "100%",
                height: "45px",
                color: "#FFF",
                border: "none",
                background: "#13375B",
                borderRadius: "3px",
            }}>Send</button>
        </form>
       </>
    );
};

export default Contact;
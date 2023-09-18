import {useFormik} from 'formik'
import * as Yup from 'yup'
function Formers() {

    const validationSchema=Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().email("Invalid email format").required("Required"),
        password:Yup.string().required("Required")
    })
    const validate=values=>{
        let errors={}
        if (!values.name) {
            errors.name="Required"
        }
        if(!values.email){
            errors.email="Required"
            
        }
       if(!values.password){
            errors.password="Required"
        }
        return errors
       }
    const formik=useFormik({
       initialValues:{
        name:'',
        email:'',
        password:'' 
       },
       onSubmit:values=>{
        console.log(values)
       },
       validationSchema
    })
 //console.log(formik.errors)
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" name="name" {...formik.getFieldProps('name')} id="name" /><br/>
                {formik.touched.name && formik.errors.name ?formik.errors.name:''}
                <br/>
                
                <label htmlFor="email">Email:</label><br/>
                <input type="email" name="email" id="email" {...formik.getFieldProps('email')} /><br/>
                {formik.touched.email && formik.errors.email ?formik.errors.email:''}
                <br/>
                <br/>
                
                <label htmlFor="name">Password</label><br/>
                <input type="password" name="password"{...formik.getFieldProps('password')} id="password"/><br/>
                {formik.touched.password &&formik.errors.password ?formik.errors.password:''}
                <br/>
                <br/>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Formers;
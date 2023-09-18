import {Form,Formik,Field, ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError';

function Formers() {

    const validationSchema=Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().email("Invalid email format").required("Required"),
        password:Yup.string().required("Required")
    })
    const initialValues={
        name:'',
        email:'',
        password:'' ,
        ph:['']
       };
    const submit=(values,props)=>{
        console.log(values)
        props.setSubmitting(false)
        //props.resetForm()
    }
    const divstyle={
        color:'red'
    }
 //console.log(formik.errors)
    return(
        <Formik 
        validateOnMount
        onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
           {
            (formik)=>{
                return (
                    <Form >
                    <label htmlFor="name">Name:</label><br/>
                    <Field type="text" name="name"  id="name" /><br/>
                    <ErrorMessage name='name' component={TextError}/>
                    <br/>
                    
                    <label htmlFor="email">Email:</label><br/>
                    <Field type="email" name="email" id="email"  /><br/>
                    <ErrorMessage name='email' >
                      {
                          (mssg)=>{
                            return <div style={divstyle}>{mssg}</div>
                          }
                      }
                    </ErrorMessage>
                    <br/>
                    <br/>
                    
                    <label htmlFor="name">Password</label><br/>
                    <Field type="password" name="password"id="password"/><br/>
                    <ErrorMessage name='password' component={TextError}/>
                    <br/>
                    <br/>
                    <div>
                        <label>Phone number</label>
                        <FieldArray>
                            {
                                (props)=>{
                                    console.log(props)
                                    const {push,remove,form}=props
                                    const {values}=form
                                    const {ph}=values
                                    //console.log(ph)
                                    return(
                                        <div>
                                        {
                                            
                                           
                                           
                                            ph.map((value,index)=>{
                                            
                                                return (
                                                    <div key={index}>
                                                    <Field name={`ph[${index}]`} ></Field>
                                                    <button type='button' onClick={()=>remove(index)}>-</button>
                                                    <button type='button' onClick={()=>push('')}>+</button>
                                                </div>
                                                )
                                            
                                            })
                                        }
                                        </div>
                                    )
                                }
                            }
                        </FieldArray>
    
                    </div>
                    <button type='button' onClick={()=>formik.setFieldTouched('name')}>Nametouch</button>
                    <button type='button' onClick={()=>formik.validateField('name')}>Validate</button>
                    <input type="submit" disabled={formik.isSubmitting}></input>
                    <button type='reset'>Reset</button>
                </Form>
                )
            }
           }
        </Formik>
    );
}
//disabled={!formik.isValid}
export default Formers;
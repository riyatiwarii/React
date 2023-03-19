// Helper styles for demo
import React, {useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import register from "./register.png"



const Schema = Yup.object().shape({
 
  yourPortfolio: Yup.string().url("Your portfolio url must be valid.").nullable().required("This field is required."),
  photoUpload: Yup.mixed().required('A file is required'),
  fileUpload: Yup.mixed().required('A file is required'),
  about: Yup.string().required("This field is required."),
  firstName: Yup.string().required("This field is required."),
  lastName: Yup.string().required("This field is required."),
  gender: Yup.string().required('Gender is required'),
  emailAddress: Yup.string().email("Invalid email").required("This field is required."),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  phoneNumber : Yup.string().matches(/^(?:\+91|0)?[6789]\d{9}$/, {
    message: "Invalid Phone number",
    excludeEmptyString: false,
  }).required("This field is required."),
  streetAddress: Yup.string()
    .required('Street address is required')
    .max(100, 'Street address must be less than or equal to 100 characters'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postalCode: Yup.string().required('Postal code is required'),
    byEmail: Yup.array()
    .required('At least one checkbox must be selected.')
    .min(1, 'At least one checkbox must be selected.'),
    pushNotifications: Yup.string().required("Please select an option"),
    termsConditions: Yup.boolean().oneOf([true], "Please accept terms and conditions.")
})

const Form = () => (
  
  <Formik
  initialValues = {
    {
      yourPortfolio: "",
      photoUpload: "",
      fileUpload: "",
      about: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      pushNotifications: "",
      byEmail: [],
      termsConditions: false
    }
  }
  validationSchema={Schema}
  onSubmit = {(values) => {
    console.log(values)
  }}
  >
    {   
      (formik) => {
        
        return (
          <form className="form whitespace-nowrap overflow-auto scrollbar-hide" style={{background: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}} onSubmit={formik.handleSubmit}> 
          {console.log(formik.errors)}
          <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
            <div>
                <div className="card-body p-4 p-md-5" style={{backgroundImage: `url( ${register})`}}>  
                <h1 className="text-gray-700 md:text-4xl text-2xl text-center">Register Your Profile</h1>
                </div>
            </div>
            <div className= "">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div action="#" method="POST">
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="yourPortfolio" className="block text-sm font-medium leading-6 text-gray-900">Your Portfolio</label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">http://</span>
                              <input type="text" name="yourPortfolio" id="yourPortfolio" className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" placeholder="www.example.com" onChange={formik.handleChange} value={formik.values.yourPortfolio} />
                            </div>
                            {formik.touched.yourPortfolio && formik.errors.yourPortfolio && (
                              <span className="text-red-600">{formik.errors.yourPortfolio}</span>
                            )}
                          </div>
                          
                        </div>
                        <div>
                          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                          <div className="mt-2">
                            <textarea id="about" name="about" rows="3" className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:py-1.5 sm:text-sm sm:leading-6 outline-gray-300" placeholder="Write about yourself" onChange={formik.handleChange} value={formik.values.about} ></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">Brief description for your profile.</p>
                          {formik.touched.yourPortfolio && formik.errors.about && (
                              <span className="text-red-600">{formik.errors.about}</span>
                            )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                          <div className="mt-2 flex items-center">
                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <label htmlFor="photoUpload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none ml-6">
                              <span>Upload profile photo</span>
                              <input id="photoUpload" name="photoUpload" type="file" className="sr-only"/>
                            </label>
                          </div>
                          {formik.touched.fileUpload && formik.errors.fileUpload ? (
                            <div className="text-red-500 text-sm mt-1">
                              {formik.errors.fileUpload}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                          <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label htmlFor="fileUpload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none">
                                  <span>Upload a file</span>
                                  <input id="fileUpload" name="fileUpload" type="file" className="sr-only"/>
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                          </div>
                          {formik.touched.fileUpload && formik.errors.fileUpload ? (
                            <div className="text-red-500 text-sm mt-1">
                              {formik.errors.fileUpload}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                            <input type="text" name="firstName" id="firstName" autoComplete="given-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.firstName} />
                            {formik.touched.firstName && formik.errors.firstName && (
                              <span className="text-red-600">{formik.errors.firstName}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                            <input type="text" name="lastName" id="lastName" autoComplete="family-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.lastName}/>
                            {formik.touched.lastName && formik.errors.lastName && (
                              <span className="text-red-600">{formik.errors.lastName}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                            <select className="select mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 outline-gray-300">
                              <option value="">Select Gender</option>
                              <option value="2">Female</option>
                              <option value="3">Male</option>
                              <option value="4">Other</option>
                            </select>
                            {formik.touched.gender && formik.errors.gender && (
                              <span className="text-red-600">{formik.errors.gender}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="emailAddress" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <input type="text" name="emailAddress" id="emailAddress" autoComplete="email" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.emailAddress}/>
                            {formik.touched.emailAddress && formik.errors.emailAddress && (
                              <span className="text-red-600">{formik.errors.emailAddress}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <input type="text" name="password" id="password" autoComplete="" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.password}/>
                            {formik.touched.password && formik.errors.password && (
                              <span className="text-red-600">{formik.errors.password}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                            <input type="text" name="confirmPassword" id="confirmPassword" autoComplete="" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword&& (
                              <span className="text-red-600">{formik.errors.confirmPassword}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" autoComplete="tel" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                              <span className="text-red-600">{formik.errors.phoneNumber}</span>
                            )}
                          </div>
                          <div className="col-span-6">
                            <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                            <input type="text" name="streetAddress" id="streetAddress" autoComplete="street-address" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.streetAddress}/>
                            {formik.touched.streetAddress && formik.errors.streetAddress && (
                              <span className="text-red-600">{formik.errors.streetAddress}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                            <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.city}/>
                            {formik.touched.city && formik.errors.city && (
                              <span className="text-red-600">{formik.errors.city}</span>
                            )}
                          </div>
                          <div className="col-span-2 sm:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                            <select id="state" name="state" autoComplete="state" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.state}>
                            <option value="">Select state</option>
                            <option value="AN">Andaman and Nicobar Islands</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CH">Chandigarh</option>
                            <option value="CT">Chhattisgarh</option>
                            <option value="DN">Dadra and Nagar Haveli</option>
                            <option value="DD">Daman and Diu</option>
                            <option value="DL">Delhi</option>
                            <option value="GA">Goa</option>
                            <option value="GJ">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JK">Jammu and Kashmir</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="LA">Ladakh</option>
                            <option value="LD">Lakshadweep</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PY">Puducherry</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                            </select>
                            {formik.touched.state && formik.errors.state && (
                              <span className="text-red-600">{formik.errors.state}</span>
                            )}
                          </div>
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                            <input type="text" name="postalCode" id="postalCode" autoComplete="postalCode" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-gray-300" onChange={formik.handleChange} value={formik.values.postalCode}/>
                            {formik.touched.postalCode && formik.errors.postalCode && (
                              <span className="text-red-600">{formik.errors.postalCode}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                          <legend className="sr-only">By Email</legend>
                          <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                            By Email
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="flex h-6 items-center">
                                <input
                                  id="comments"
                                  name="byEmail"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  onChange={formik.handleChange}
                                  value="comments"
                                  checked={formik.values.byEmail.includes('comments')}
                                />
                              </div>
                              <div className="ml-3 text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                  Comments
                                </label>
                                <p className="text-gray-500">Get notified when someone posts a comment on a posting.</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex h-6 items-center">
                                <input
                                  id="candidates"
                                  name="byEmail"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  onChange={formik.handleChange}
                                  value="candidates"
                                  checked={formik.values.byEmail.includes('candidates')}
                                />
                              </div>
                              <div className="ml-3 text-sm leading-6">
                                <label htmlFor="candidates" className="font-medium text-gray-900">
                                  Candidates
                                </label>
                                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex h-6 items-center">
                                <input
                                  id="offers"
                                  name="byEmail"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  onChange={formik.handleChange}
                                  value="offers"
                                  checked={formik.values.byEmail.includes('offers')}
                                />
                              </div>
                              <div className="ml-3 text-sm leading-6">
                                <label htmlFor="offers" className="font-medium text-gray-900">
                                  Offers
                                </label>
                                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                              </div>
                            </div>
                          </div>
                          {formik.errors.byEmail && formik.touched.byEmail && (
                            <div className="text-red-500">{formik.errors.byEmail}</div>
                          )}
                        </fieldset>   
                        <fieldset>
                          <legend className="contents text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input id="everything" name="pushNotifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="everything" onChange={formik.handleChange} checked={formik.values.pushNotifications === "everything"} />
                              <label htmlFor="everything" className="ml-3 block text-sm font-medium leading-6 text-gray-900">Everything</label>
                            </div>
                            <div className="flex items-center">
                              <input id="sameAsEmail" name="pushNotifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="sameAsEmail" onChange={formik.handleChange} checked={formik.values.pushNotifications === "sameAsEmail"}/>
                              <label htmlFor="sameAsEmail" className="ml-3 block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                            </div>
                            <div className="flex items-center">
                              <input id="noNotifications" name="pushNotifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="noNotifications" onChange={formik.handleChange} checked={formik.values.pushNotifications === "noNotifications"}/>
                              <label htmlFor="noNotifications" className="ml-3 block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                            </div>
                          </div>
                          {formik.touched.pushNotifications && formik.errors.pushNotifications ? (
                              <div className="text-red-500">{formik.errors.pushNotifications}</div>
                            ) : null}
                        </fieldset>
                        <fieldset>
                          <div className="flex items-start">
                            <div className="flex h-6 items-center">
                              <input id="subscription" name="subscription" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" onChange={formik.handleChange} value={formik.values.subscription}/>
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label htmlFor="subscription" className="font-medium text-gray-900">Subscribe to our Newsletter</label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
            </div>  
            <div className=" px-4 py-3 text-left sm:px-6">
              <div className="flex items-start mb-4">
                <div className="flex h-6 items-center">
                  <input id="termsConditions" name="termsConditions" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" onChange={formik.handleChange} value={formik.values.termsConditions}/>
                </div>
                <div className="ml-3 text-md leading-6 flex flex-col">
                  <label htmlFor="termsConditions" className="font-medium text-gray-900">I have read and agree to the terms and conditions.</label>
                  {formik.touched.termsConditions && formik.errors.termsConditions && (
                              <span className="text-red-600">{formik.errors.termsConditions}</span>
                    )}
                </div>
                
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
            </div>
          </div>
          </form>
        )
      }
    }
  </Formik>
);

export default Form
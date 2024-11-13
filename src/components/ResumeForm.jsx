"use client";
import React, { useReducer, useState } from "react";
import Tiptap from "./TipTap";
import parser from "html-react-parser";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  position: "",
  phonenumber: "",
  address: "",
  postcode: "",
  city: "",
  driving_licence: "",
  gender: "",
  date_of_birth: "",
  nationality: "",
  birth_place: "",
  details: "",
  jobtitle: "",
  company: "",
  location: "",
  startdate_work: "",
  enddate_work: "",
  work_summary: "",
  skills: "",
  institute: "",
  degree: "",
  edu_location: "",
  startdate_edu: "",
  enddate_edu: "",
  edu_summary: "",
};
function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, first_name: action.formValue };
    case "SET_LAST_NAME":
      return { ...state, last_name: action.formValue };
    case "SET_EMAIL":
      return { ...state, email: action.formValue };
    case "SET_POSITION":
      return { ...state, position: action.formValue };
    case "SET_PHONENUMBER":
      return { ...state, phonenumber: action.formValue };
    case "SET_ADDRESS":
      return { ...state, address: action.formValue };
    case "SET_POSTCODE":
      return { ...state, postcode: action.formValue };
    case "SET_CITY":
      return { ...state, city: action.formValue };
    case "SET_DRIVING_LICENCE":
      return { ...state, driving_licence: action.formValue };
    case "SET_GENDER":
      return { ...state, gender: action.formValue };
    case "SET_DATE_OF_BIRTH":
      return { ...state, date_of_birth: action.formValue };
    case "SET_NATIONALITY":
      return { ...state, nationality: action.formValue };
    case "SET_BIRTH_PLACE":
      return { ...state, birth_place: action.formValue };
    case "SET_DETAILS":
      return { ...state, details: action.formValue };
    case "SET_JOBTITLE":
      return { ...state, jobtitle: action.formValue };
    case "SET_COMPANY":
      return { ...state, company: action.formValue };
    case "SET_LOCATION":
      return { ...state, location: action.formValue };
    case "SET_STARTDATE_WORK":
      return { ...state, startdate_work: action.formValue };
    case "SET_ENDDATE_WORK":
      return { ...state, enddate_work: action.formValue };
    case "SET_WORK_SUMMARY":
      return { ...state, work_summary: action.formValue };
    case "SET_SKILLS":
      return { ...state, skills: action.formValue };
    case "SET_INSTITUTE":
      return { ...state, institute: action.formValue };
    case "SET_DEGREE":
      return { ...state, degree: action.formValue };
    case "SET_EDU_LOCATION":
      return { ...state, edu_location: action.formValue };
    case "SET_STARTDATE_EDU":
      return { ...state, startdate_edu: action.formValue };
    case "SET_ENDDATE_EDU":
      return { ...state, enddate_edu: action.formValue };
    case "SET_EDU_SUMMARY":
      return { ...state, edu_summary: action.formValue };
    default:
      return state;
  }
}

export default function ResumeForm({ handleSubmit }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [content, setContent] = useState("");

  // const handleEditorChange = (newContent) => {
  //   setContent(newContent);
  // };

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, formValue: value });
  }

  function handleSubmitLocal(){
    
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });

    // Add the TipTap content (summary) to FormData
    // formData.append("summary", summary);

    // Pass formData to the handleSubmit function in resumePage
    handleSubmit(formData);
  }

  const [scale, setScale] = useState(1);

  return (
    <div className="flex  min-h-screen bg-gray-100">
      <form
        action={handleSubmitLocal}
        className="overflow-y-auto w-1/2 h-screen bg-white shadow-md rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Personal Details
        </h2>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="first_name"
              className="block text-gray-700 font-medium mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={state.first_name}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={state.last_name}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          E-Mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label
          htmlFor="position"
          className="block text-gray-700 font-medium mb-2"
        >
          Position:
        </label>
        <input
          type="text"
          name="position"
          id="position"
          value={state.position}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-6 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
          Additional Details
        </h2>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="phonenumber"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number:
            </label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              min={0}
              value={state.phonenumber}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={state.address}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-8 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="postcode"
              className="block text-gray-700 font-medium mb-2"
            >
              Postcode:
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              value={state.postcode}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-2"
            >
              City:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={state.city}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="driving_licence"
              className="block text-gray-700 font-medium mb-2"
            >
              Driving Licence:
            </label>
            <input
              type="text"
              name="driving_licence"
              id="driving_licence"
              value={state.driving_licence}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
            >
              Gender:
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={state.gender}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="date_of_birth"
              className="block text-gray-700 font-medium mb-2"
            >
              Date Of Birth:
            </label>
            <input
              type="date"
              name="date_of_birth"
              id="date_of_birth"
              value={state.date_of_birth}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="nationality"
              className="block text-gray-700 font-medium mb-2"
            >
              Nationality:
            </label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              value={state.nationality}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="birth_place"
              className="block text-gray-700 font-medium mb-2"
            >
              Birth Place:
            </label>
            <input
              type="text"
              name="birth_place"
              id="birth_place"
              value={state.birth_place}
              onChange={handleInputChange}
              className="w-full p-2 mb-8 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
          Personal Profile
        </h2>

        {/* <label
        {/* <label
          htmlFor="details"
          className="block text-gray-700 font-medium mb-2"
        >
          Personal Profile:
        </label> */}
        {/* <textarea
          name="details"
          id="details"
          value={state.details}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
        <Tiptap
          content={state.details}
          onContentChange={(content) =>
            dispatch({ type: "SET_DETAILS", formValue: content })
          }
        />

        <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
          Work Experience
        </h2>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="jobtitle"
              className="block text-gray-700 font-medium mb-2"
            >
              Job Title:
            </label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              value={state.jobtitle}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="company"
              className="block text-gray-700 font-medium mb-2"
            >
              Company:
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={state.company}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="location"
              className="block text-gray-700 font-medium mb-2"
            >
              Location:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={state.location}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="startdate_work"
              className="block text-gray-700 font-medium mb-2"
            >
              Start Date:
            </label>
            <input
              type="date"
              name="startdate_work"
              id="startdate_work"
              value={state.startdate_work}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label
              htmlFor="enddate_work"
              className="block text-gray-700 font-medium mb-2"
            >
              End Date:
            </label>
            <input
              type="date"
              name="enddate_work"
              id="enddate_work"
              value={state.enddate_work}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label
          htmlFor="work_summary"
          className="block text-gray-700 font-medium mb-2"
        >
          Summary:
        </label>
        {/* <textarea
              name="work_summary"
              id="work_summary"
              value={state.work_summary}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}

        <Tiptap
          content={state.work_summary}
          onContentChange={(content) =>
            dispatch({ type: "SET_WORK_SUMMARY", formValue: content })
          }
        />

        {/* <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">Skills</h2> */}

        <label
          htmlFor="skills"
          className="block text-gray-700 text-3xl font-medium mb-2"
        >
          Skills
        </label>
        {/* <textarea
          name="skills"
          id="skills"
          value={state.skills}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}

        <Tiptap
          content={state.skills}
          onContentChange={(content) =>
            dispatch({ type: "SET_SKILLS", formValue: content })
          }
        />

        <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
          Education
        </h2>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="institute"
              className="block text-gray-700 font-medium mb-2"
            >
              Institution:
            </label>
            <input
              type="text"
              name="institute"
              id="institute"
              value={state.institute}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="degree"
              className="block text-gray-700 font-medium mb-2"
            >
              Degree:
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={state.degree}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="edu_location"
              className="block text-gray-700 font-medium mb-2"
            >
              Location:
            </label>
            <input
              type="text"
              name="edu_location"
              id="edu_location"
              value={state.edu_location}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="startdate_edu"
              className="block text-gray-700 font-medium mb-2"
            >
              Start Date:
            </label>
            <input
              type="date"
              name="startdate_edu"
              id="startdate_edu"
              value={state.startdate_edu}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="enddate_edu"
              className="block text-gray-700 font-medium mb-2"
            >
              End Date:
            </label>
            <input
              type="date"
              name="enddate_edu"
              id="enddate_edu"
              value={state.enddate_edu}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <label
          htmlFor="edu_summary"
          className="block text-gray-700 font-medium mb-2"
        >
          Summary:
        </label>
        {/* <textarea
              name="edu_summary"
              id="edu_summary"
              value={state.edu_summary}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
        <Tiptap
          content={state.edu_summary}
          onContentChange={(content) =>
            dispatch({ type: "SET_EDU_SUMMARY", formValue: content })
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
        >
          Submit
        </button>
      </form>

      {/* Preview Section */}
      <div className="w-1/2 h-screen overflow-y-auto bg-gray-200 p-8 ">
        {/* Zoom Controls */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setScale((prevScale) => prevScale + 0.1)}
            className="px-4 py-2 bg-blue-500 text-white rounded z-50"
          >
            +
          </button>
          <button
            onClick={() =>
              setScale((prevScale) => Math.max(prevScale - 0.1, 0.5))
            }
            className="px-4 py-2 bg-blue-500 text-white rounded z-50"
          >
            -
          </button>
          <button
            onClick={() => setScale(1)}
            className="px-4 py-2 bg-gray-500 text-white rounded z-50"
          >
            Reset Zoom
          </button>
        </div>
        <div
          className="bg-sky-50 ml-32 h-[600px] w-[400px]"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="mt-12 ml-4 text-3xl text-blue-800">
                {state.first_name} {state.last_name}
              </p>
              <p className="ml-4 text-gray-600 text-xs"> {state.position} </p>
            </div>
            <div className="flex flex-col mt-12 ">
              <p className=" ml-4 text-gray-600 text-xs">{state.address}</p>
              <p className="text-xs mr-4 text-gray-600">
                {state.city} {state.postcode}
              </p>
              <p className="mt-4 ml-4 mr-4 text-gray-600 text-xs">
                {state.phonenumber}
              </p>
              <p className="ml-4 mr-4 text-gray-600 text-xs"> {state.email} </p>
            </div>
          </div>

          <div className="flex  justify-between">
            <div>
              {state.driving_licence ||
              state.gender ||
              state.date_of_birth ||
              state.nationality ||
              state.birth_place ? (
                <p className="text-xl ml-4 text-blue-600"> Additional Info </p>
              ) : (
                <></>
              )}
              {state.driving_licence ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  Driving Licence {state.driving_licence}{" "}
                </p>
              ) : (
                <></>
              )}

              {state.gender ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  Gender {state.gender}
                </p>
              ) : (
                <></>
              )}
              {state.date_of_birth ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  Date Of Birth {state.date_of_birth}
                </p>
              ) : (
                <></>
              )}
              {state.nationality ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  Nationality {state.nationality}
                </p>
              ) : (
                <></>
              )}
              {state.birth_place ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  Birth Place {state.birth_place}
                </p>
              ) : (
                <></>
              )}
              {state.details ? (
                <p className="ml-4 mr-4 text-blue-600 text-xl"> About </p>
              ) : (
                <></>
              )}
              <div className="ml-4 mr-4 text-gray-600 text-xs">
                {" "}
                {parser(state.details)}
              </div>
            </div>
            <div className="flex flex-col ">
              {state.jobtitle ||
              state.company ||
              state.location ||
              state.startdate_work ||
              state.enddate_work ||
              state.work_summary ? (
                <p className="ml-4 mr-4 text-blue-600 text-xl">
                  {" "}
                  Work Experiance
                </p>
              ) : (
                <></>
              )}
              {state.jobtitle ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.jobtitle}
                </p>
              ) : (
                <></>
              )}
              {state.company ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.company}
                </p>
              ) : (
                <></>
              )}
              {state.location ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.location}
                </p>
              ) : (
                <></>
              )}
              {state.startdate_work ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.startdate_work}
                </p>
              ) : (
                <></>
              )}
              {state.enddate_work ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.enddate_work}
                </p>
              ) : (
                <></>
              )}
              {state.work_summary ? (
                <div className="ml-4 mr-4 text-gray-600 text-xs">
                  {parser(state.work_summary)}
                </div>
              ) : (
                <></>
              )}
              {state.institute ||
              state.degree ||
              state.edu_location ||
              state.startdate_edu ||
              state.enddate_edu ||
              state.edu_summary ? (
                <p className="ml-4 mr-4 text-blue-600 text-xl">Education</p>
              ) : (
                <></>
              )}
              {state.institute ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.institute}
                </p>
              ) : (
                <></>
              )}
              {state.degree ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.degree}
                </p>
              ) : (
                <></>
              )}
              {state.edu_location ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.edu_location}
                </p>
              ) : (
                <></>
              )}
              {state.startdate_edu ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.startdate_edu}
                </p>
              ) : (
                <></>
              )}
              {state.enddate_edu ? (
                <p className="ml-4 mr-4 text-gray-600 text-xs">
                  {state.enddate_edu}
                </p>
              ) : (
                <></>
              )}
              {state.edu_summary ? (
                <div className="ml-4 mr-4 text-gray-600 text-xs">
                  {parser(state.edu_summary)}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {state.skills ? (
            <p className="ml-4 mr-4 text-blue-600 text-xl">Skill</p>
          ) : (
            <></>
          )}
          {
            <div className="ml-4 mr-4 text-gray-600 text-xs">
              {parser(state.skills)}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

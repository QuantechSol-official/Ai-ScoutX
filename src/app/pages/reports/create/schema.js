// Import Dependencies
import * as Yup from 'yup'

// Local Imports
// import { isDeltaNotEmpty } from 'utils/quillUtils'

// ----------------------------------------------------------------------

export const schema = Yup.object().shape({
    productKeyword: Yup.string()
        .trim()
        .min(2, 'Title Keyword too short')
        .max(50, 'Blog Title Too Long!')
        .required('Blog Title Required'),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    regions: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.number().required(),
        name: Yup.string().required(),
      })
    )
    .min(1, "Please select at least one region")
    .required("Regions selection is required"),    
    // cover: Yup.mixed().nullable()
    //     .required("You need to provide a file")
    //     .test("fileSize", "Max file size should be 4MB", value => value && value.size <= 4194304),
    

})

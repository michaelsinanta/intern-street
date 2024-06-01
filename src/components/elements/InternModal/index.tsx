// import { Box, Modal, Typography } from "@mui/material";
// import { ModalProps } from "./interface";
// import style from "styled-jsx/style";
// import { useEffect, useState } from "react";

// export const InternModal: React.FC<{ props: ModalProps }> = ({ props }) => {
//     const [internDetails, setInternDetails] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (props.open) {
//             setLoading(true);
//             fetch(`https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/position/${props.id}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setInternDetails(data.data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching intern data:', error);
//                     setLoading(false);
//                 });
//         }
//     }, [props.open, props.id]);

//     return (
//         <Modal
//             open={props.open}
//             onClose={props.handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <Box sx={style}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     {loading ? "Loading..." : internDetails'name}
//                 </Typography>
//                 {internDetails && !loading && (
//                     <>
//                         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                             {internDetails.requirement}
//                         </Typography>
//                         <Typography sx={{ mt: 2 }}>
//                             <strong>Program Description:</strong> {internDetails.activity_id.description}
//                         </Typography>
//                         <Typography sx={{ mt: 2 }}>
//                             <strong>Additional Info:</strong> {internDetails.activity_id.additional_information}
//                         </Typography>
//                     </>
//                 )}
//             </Box>
//         </Modal>
//     );
// };

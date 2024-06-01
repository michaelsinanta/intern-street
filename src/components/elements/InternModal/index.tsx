"use client";
import { Box, Modal, Typography } from "@mui/material";
import { InternDetails } from "./interface";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/components/context/ModalContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "80%",
  maxWidth: "90%",
};

export const InternModal: React.FC = () => {
  const { id, isOpened, closeModal } = useContext(ModalContext);
  const [internDetails, setInternDetails] = useState<InternDetails | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id && isOpened) {
      setLoading(true);
      fetch(
        `https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/position/${id}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setInternDetails(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching intern data:", error);
          setLoading(false);
        });
    }
  }, [id, isOpened]);

  return (
    <Modal
      open={isOpened}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {loading ? "Loading..." : internDetails?.name || "No Title Available"}
        </Typography>
        {internDetails && !loading && (
          <>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {internDetails.requirement}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Program Description:</strong>{" "}
              {internDetails.activity_id.description}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Additional Info:</strong>{" "}
              {internDetails.activity_id.additional_information}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

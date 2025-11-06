import { useState } from "react";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  // Google Maps URL you want users to copy
  const mapLink =
    "https://maps.app.goo.gl/WBid5dNsf5mB98dG9"; // Replace with your coordinates

    
  const handleCopy = () => {
    navigator.clipboard.writeText(mapLink).then(() => {
      setCopied(true);
    });
  };

  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body1" mb={1}>
        📍 Ubicación Despacho
      </Typography>

      {/* Google Maps iframe */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          height: 250,
          margin: "0 auto",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
         title="store-location-map" 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.64238270288632!2d-66.15072145322951!3d-17.400484228652587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373fad7a89959%3A0xb1ef3b15b0ce1378!2sAv.%20Rep%C3%BAblica%201009%2C%20Cochabamba!5e1!3m2!1ses!2sbo!4v1762469234374!5m2!1ses!2sbo"
         width="100%"
          height="100%"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      {/* Copy Link Button */}
      <Box mt={2}>
        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
        >
          Copiar ubicación
        </Button>
      </Box>

      {/* Snackbar notification */}
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Enlace copiado!
        </Alert>
      </Snackbar>

      {/* Footer text */}
      <Typography variant="body2" color="text.secondary" mt={1}>
        Dirección: Pasaje 3 entre Av República y Calle Francisco Miranda
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        Contacto: +591 60391073
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        Cochabamba - Bolivia | © {new Date().getFullYear()} Comercial Rosita 2
      </Typography>
    </Box>   
  );
};

export default Footer;

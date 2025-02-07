import PropTypes from "prop-types";
import "./Button.css"; // Importa o arquivo de estilos

export const Button = ({ type, label, fileUrl, phoneNumber }) => {
  const handleClick = () => {
    if (type === "download" && fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "curriculo.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (type === "whatsapp" && phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  return (
    <button className={`button ${type}`} onClick={handleClick}>
      {label}
    </button>
  );
};

// Validação das Props
Button.propTypes = {
  type: PropTypes.oneOf(["download", "whatsapp"]).isRequired,
  label: PropTypes.string.isRequired,
  fileUrl: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export const RoundedButton = ({ label, onClick }) => {
    const buttonStyle = {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      border: "0px solid #ccc",
      margin: "5px",
      cursor: "pointer",
      fontWeight: "bold"
    };
  
    return (
       
      <span style={buttonStyle} onClick={onClick}>
        {label}
      </span>
    );
  };
  
  
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function WhatsappWidget() {
  const whatsappNumber = "918595076589";
  const callNumber = "+918595076589";

  return (
    <>
      {/* Call Now Button */}
      <a
        href={`tel:${callNumber}`}
        title="Call us now"
        className="chat-button call"
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Kismat%20Ki%20Property%2C%20I%20am%20interested%20in%20your%20properties`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="chat-button whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Embedded styles */}
      <style>{`
        .chat-button {
          position: fixed;
          right: 20px;
          z-index: 9999;
          border-radius: 50%;
          padding: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          animation: pulse 2s infinite;
          color: #fff;
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .chat-button:hover {
          transform: scale(1.1);
        }

        .chat-button.call {
          bottom: 200px; /* moved further up */
          background-color: #007bff;
        }

        .chat-button.whatsapp {
          bottom: 130px; /* moved further up */
          background-color: #25D366;
          font-size: 24px;
        }

        @media (max-width: 480px) {
          .chat-button {
            width: 50px;
            height: 50px;
            padding: 10px;
            font-size: 18px;
          }

          .chat-button.call {
            bottom: 180px; /* mobile: also moved up */
          }

          .chat-button.whatsapp {
            bottom: 110px;
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}

export default WhatsappWidget;

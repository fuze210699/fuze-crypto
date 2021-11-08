import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./style.css";
import { CloseOutlined } from "@ant-design/icons";
import { BsYoutube } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";

export default function IntroducePopup() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const showTimeOut = setTimeout(() => {
      setIsShow(true);
    }, 1500);
    return () => {
      clearTimeout(showTimeOut);
    };
  }, []);
  const handleClose = () => {
    setIsShow(false);
  };

  //https://www.youtube.com/watch?v=9DDX3US3kss&list=WL&index=37
  return (
    <>
      <Popup
        open={isShow}
        modal
        position="center center"
        closeOnDocumentClick={false}
        onClose={handleClose}
      >
        <div className="popup-container">
          <CloseOutlined className="popup-close" onClick={handleClose} />
          <div className="popup-inner">
            <div className="popup-header">
              <FiAlertCircle className="popup-icon-alert" />
              <h2>Xin Chào</h2>
            </div>
            <div className="popup-main-content">
              Nội dung của trang web này được xây dựng dựa trên sự hướng dẫn của
              kênh Youtube: <strong>JavaScript Mastery</strong>, xin gửi lời cảm
              ơn trân trọng đến chủ kênh.
              <br />
              Tuy vậy tôi đã viết thêm các chức năng khác nhau để làm cho nội
              dung của trang thêm đa dạng. Trang web này không dùng cho bất kỳ
              mục đích lợi nhuận nào, duy nhất chỉ nhằm trao dồi kiến thức của
              tôi và mang đến giá trị cho cộng đồng. Sau đây là 2 đường dẫn đến
              trang{" "}
              <a
                href="https://github.com/thien115116"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Github</strong>
              </a>{" "}
              của tôi và kênh{" "}
              <a
                href="https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Youtube</strong>
              </a>{" "}
              của chủ kênh, cảm ơn đã đọc.
              <div style={{ textAlign: "center" }}>
                <button className="popup-button-close" onClick={handleClose}>
                  Đồng ý, tiếp tục !
                </button>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

import { Modal } from "antd";
import React from "react";

/* interface IState {
  modal1Visible: boolean,
  modal2Visible: boolean,
} */

interface IProps {
  setModalVisible:({response}: any) => void
}

const Pop: React.SFC<IProps> = ({
  setModalVisible
}) =>  (
      <div onClick={()=> setModalVisible}>
        <Modal
          title="This is Our Commision"
          centered={true}
          visible={true}
          onOk={() => setModalVisible(true)}
          onCancel={() => setModalVisible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
  )

export default Pop;
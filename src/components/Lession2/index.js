// import { Form, Input, Button } from "antd";

// ///Form Login
// const Lession2 = (props) => {
//   const [form] = Form.useForm();

//   const onSubmit = async () => {
//     const values = await form.validateFields();
//     console.log(values);
//     // do somethings
//   };

//   return (
//     <Form form={form} layout="vertical">
//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[
//           { required: true, message: "Please enter your Email!" },
//           { type: "email", message: "Please enter your password!" },
//         ]}
//       >
//         <Input style={{ width: "20%" }} />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: "Please enter your password!" }]}
//       >
//         <Input.Password style={{ width: "20%" }} />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" onClick={onSubmit}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Lession2;

import { Form, Input, Button, message } from "antd";

const Lession2 = (props) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // do somethings
    message.success("Login successful!");
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your Email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input style={{ width: "20%" }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password style={{ width: "20%" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Lession2;

import React from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import * as Yup from "yup";

import AuthLayout from "../../components/auth-layout/auth-layout";
import { User } from "../../redux/user/user.types";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Field, FieldProps, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query-pro";
import { BASE_URL, getHeaders } from "../../utils/api.utils";
import FormInput from "../../components/form-input/form-input.component";
import LinkItem from "../../components/link-item/link-item.component";
import { COLORS } from "../../styles/theme";
import CustomButton from "../../components/custom-button/custom-button.component";
import { saveItemToStorage, USER_TOKEN_KEY } from "../../utils/utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type FormValues = {
  email: string;
};

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
});

const ForgotPassword = () => {
  const initialValues: FormValues = {
    email: "",
  };

  const handleSubmit = async (values: FormValues) => {
    console.log({ values });
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to reset password"
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }: any) => (
          <Box
            as="form"
            mx="auto"
            maxW="500px"
            w="100%"
            pt="3rem"
            minH="50vh"
            d="flex"
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <Field name="email">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    type="email"
                    h="3rem"
                    formControlProps={{ my: { base: 4, md: 6 } }}
                    placeholder="Enter your email address"
                    labelProps={{
                      children: "Email",
                    }}
                  />
                );
              }}
            </Field>

            <Flex mt={8} justify="center">
              <CustomButton
                textTransform="capitalize"
                maxW="10rem"
                w={{ base: "60%", sm: "50%" }}
                fontSize="1rem"
                type="submit"
              >
                <Flex align="center">
                  <Box fontSize="14px">Reset Password</Box>
                  <ArrowForwardIcon ml="0.5rem" />
                </Flex>
              </CustomButton>
            </Flex>

            <Flex
              mx="auto"
              align="center"
              mt={8}
              mb={8}
              fontSize={{ base: "0.7rem", md: "0.8rem" }}
            >
              Already have an account?{" "}
              <LinkItem
                isAnchor
                ml="4px"
                aria-label="login"
                url="/login"
                color={COLORS.PRIMARY_COLOR}
                _hover={{ color: "blue" }}
              >
                Login
              </LinkItem>{" "}
            </Flex>
          </Box>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPassword;

import { Box } from "@chakra-ui/react";
import { Layoutprops } from "./layout.props";
import Header from "./header/header";
import { FunctionComponent } from "react";
import Sidebar from "./sidebar/sidebar";

const Layout = ({ children }: Layoutprops): JSX.Element => {
  return (
    <Box maxW={'full'} overflow={'hidden'}>
        <Header />
        <Sidebar />
        <Box>{children}</Box>
    </Box>
  );
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
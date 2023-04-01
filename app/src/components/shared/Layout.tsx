import { Column } from "@/lib/chakraUtils";

const Layout = ({ children }: { children: any }) => {

  return (
    <Column 
      minHeight={"100vh"} 
      flex={1} 
      mainAxisAlignment={"flex-start"} 
      crossAxisAlignment={"center"}

      bg={"black.500"}
    >
      {children}
    </Column>
  );
};

export default Layout;
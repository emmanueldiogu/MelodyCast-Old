/* eslint-disable react/jsx-no-constructed-context-values */
import { useCallback, createContext, useContext, useState } from "react";
// export a context and hook to access it
const PermissionContext = createContext();

export function PermissionProvider({ children }) {
  const [permissions, setPermissions] = useState([]);

  const hasPermission = useCallback(
    (permission) => {
      //  or false

      if (permissions.length === 0) {
        return false;
      }

      return permissions.find((p) => p.name === permission);
    },
    [permissions]
  );

  return (
    <PermissionContext.Provider
      value={{
        permissions,
        setPermissions,
        hasPermission
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}

export const usePermission = () => {
  if (!useContext(PermissionContext)) {
    throw new Error("usePermission must be used within a PermissionProvider");
  }
  return useContext(PermissionContext);
};

// const {permissions } = usePermission();
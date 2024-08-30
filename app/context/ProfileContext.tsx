import { createContext, useState, ReactNode, useContext } from 'react';

export enum Profile {
  Stylist = 'Stylist',
  Host = 'Host',
}

interface ProfileContextType {
  profileType: Profile;
  setProfileType: React.Dispatch<React.SetStateAction<Profile>>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profileType, setProfileType] = useState<Profile>(Profile.Stylist);

  return (
    <ProfileContext.Provider
      value={{
        profileType,
        setProfileType,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

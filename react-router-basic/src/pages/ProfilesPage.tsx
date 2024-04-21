import { NavLink, Outlet } from "react-router-dom";

export const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      <div>
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: "" }
            }
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <h1>
        <Outlet />
      </h1>
    </div>
  );
};

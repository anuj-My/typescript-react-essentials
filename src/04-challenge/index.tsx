type BasicProfile = {
  type: "basic";
  name: string;
};
type AdvancedProfile = {
  type: "advanced";
  name: string;
  email?: string;
};

type Profile = BasicProfile | AdvancedProfile;

const Component = (props: Profile) => {
  const { type, name } = props;
  if (type === "advanced") {
    const { email } = props;
    return (
      <div className={`alert alert-success`}>
        <h5>{type}</h5>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    );
  }

  return (
    <div className={`alert alert-danger`}>
      <h5>{type}</h5>
      <h1>{name}</h1>
    </div>
  );
};

export default Component;

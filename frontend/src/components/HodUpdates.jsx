import { Requested } from "../hooks/Requested";
export const HodUpdates = () => {
  const requested = Requested();
  return (
    <div className="updatesPanel">
      <h2>Updates Panel</h2>
      {requested ? <p>You Requested for {requested}</p> : <></>}
    </div>
  );
};

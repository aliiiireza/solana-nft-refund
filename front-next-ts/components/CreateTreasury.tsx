import { useState } from "react";
import { notify } from "@/common/notify";
import Button from "@/components/Button/Button";
import useTreasuryAccount from "@/hooks/useTreasuryAccount";

const CreateTreasury = () => {
  const { init_treasury } = useTreasuryAccount();
  const [loading, setLoading] = useState(false);

  const handleInitTreasury = async () => {
    try {
      setLoading(true);
      const result = await init_treasury();
      setLoading(false);
      notify({
        message: "Initialize Treasury Successfully",
        type: "success",
      });
    } catch {
      setLoading(false);
      notify({
        message: "Error On Init Treasury",
        type: "error",
      });
    }
  };
  return (
    <div
      className={`card-wrapper-treasury-box ${loading ? "custom-loading" : ""}`}
      style={{ width: "calc(100% - 20px)" }}
    >
      <h2 className="card-wrapper-description">Create Treasury</h2>
      <p>Not Found Any Treasury, Create First.</p>
      <Button onClick={handleInitTreasury} loading={loading}>
        Initialize Treasury
      </Button>
    </div>
  );
};

export default CreateTreasury;

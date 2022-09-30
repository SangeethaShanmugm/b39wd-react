export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "380px",
    marginTop: "20px",
  };
  return (
    <div style={styles}></div>
  );
}

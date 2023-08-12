"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Button(){
    return (
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="bg-blue-mid  hover:bg-blue-dark text-white px-4 py-2 rounded-full font-Montserrat font-semibold col-span-1 shadow-lg shadow-blue-300/40 hover:-translate-y-1 duration-200"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="bg-red-500  hover:bg-red-700 text-white px-4 py-2 rounded-full font-Montserrat font-semibold col-span-1 shadow-lg shadow-red-300/40 hover:-translate-y-1 duration-200"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                        className=""
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 40,
                              height: 40,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 40, height: 40 }}
                              />
                            )}
                          </div>
                        )}
                        {/* {chain.name} */}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="bg-purple-700 p-3 py-2 rounded-full  shadow-lg shadow-purple-500/30 hover:-translate-y-1 duration-300 font-Montserrat  font-semibold"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
    );
}

export default Button;
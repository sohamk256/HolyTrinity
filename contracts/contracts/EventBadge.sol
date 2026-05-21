// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

/// @title EventBadge - Gasless Event Badge NFT
/// @notice A simple ERC721 NFT that mints personalized event badges with on-chain SVG art
/// @dev Deployed on Base Sepolia, gas sponsored via UGF (Universal Gas Framework)
contract EventBadge is ERC721 {
    using Strings for uint256;

    uint256 private _nextTokenId;

    mapping(uint256 => string) private _badgeNames;
    mapping(uint256 => uint256) private _mintTimestamps;

    event BadgeClaimed(
        address indexed to,
        uint256 indexed tokenId,
        string name
    );

    constructor() ERC721("Gasless Event Badge", "GBADGE") {}

    /// @notice Mint a personalized event badge to the caller
    /// @param name The attendee name to display on the badge
    /// @return tokenId The ID of the minted badge
    function claimBadge(string calldata name) external returns (uint256) {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(name).length <= 50, "Name too long");

        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _badgeNames[tokenId] = name;
        _mintTimestamps[tokenId] = block.timestamp;

        emit BadgeClaimed(msg.sender, tokenId, name);
        return tokenId;
    }

    /// @notice Get the badge name for a given token
    function getBadgeName(uint256 tokenId) external view returns (string memory) {
        _requireOwned(tokenId);
        return _badgeNames[tokenId];
    }

    /// @notice Get the total number of badges minted
    function totalMinted() external view returns (uint256) {
        return _nextTokenId;
    }

    /// @notice Returns fully on-chain SVG metadata for each badge
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        string memory name = _badgeNames[tokenId];

        string memory svg = _generateSVG(tokenId, name);

        string memory json = string(
            abi.encodePacked(
                '{"name":"Gasless Event Badge #',
                tokenId.toString(),
                '","description":"Personalized gasless event badge for ',
                name,
                '. Minted without ETH gas fees on Base Sepolia via UGF."',
                ',"image":"data:image/svg+xml;base64,',
                Base64.encode(bytes(svg)),
                '","attributes":[{"trait_type":"Attendee","value":"',
                name,
                '"},{"trait_type":"Badge ID","value":"',
                tokenId.toString(),
                '"}]}'
            )
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(bytes(json))
            )
        );
    }

    /// @dev Generates a beautiful SVG badge with gradients
    function _generateSVG(uint256 tokenId, string memory name)
        internal
        pure
        returns (string memory)
    {
        return string(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">',
                '<defs>'
                '<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">'
                '<stop offset="0%" style="stop-color:#0a0a1a"/>'
                '<stop offset="100%" style="stop-color:#1a0a2e"/>'
                '</linearGradient>'
                '<linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">'
                '<stop offset="0%" style="stop-color:#00d4ff"/>'
                '<stop offset="100%" style="stop-color:#7b61ff"/>'
                '</linearGradient>'
                '</defs>',
                '<rect width="400" height="400" rx="24" fill="url(#bg)"/>',
                '<rect x="16" y="16" width="368" height="368" rx="18" fill="none" stroke="url(#accent)" stroke-width="2" opacity="0.4"/>',
                '<circle cx="200" cy="70" r="6" fill="#00d4ff" opacity="0.6"/>'
                '<text x="200" y="130" text-anchor="middle" fill="url(#accent)" font-size="26" font-weight="bold" font-family="Arial,sans-serif">EVENT BADGE</text>',
                '<line x1="120" y1="155" x2="280" y2="155" stroke="url(#accent)" stroke-width="1.5" opacity="0.3"/>',
                '<text x="200" y="215" text-anchor="middle" fill="#ffffff" font-size="24" font-family="Arial,sans-serif">',
                name,
                '</text>',
                '<text x="200" y="275" text-anchor="middle" fill="#00d4ff" font-size="18" font-family="Arial,sans-serif">#',
                tokenId.toString(),
                '</text>',
                '<text x="200" y="355" text-anchor="middle" fill="#555" font-size="11" font-family="Arial,sans-serif">Gasless Mint &#x2022; Base Sepolia &#x2022; UGF</text>',
                '</svg>'
            )
        );
    }
}

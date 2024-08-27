export const getIntegrationIcon = (name: string) => {
    const iconPath = (name === 'Gmail') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660bf0cb9623f48b9b51/view?project=64ea6567e57f4a43d7f9&mode=admin"
        : (name === 'Ironclad') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02e2bb05d72ded2d/view?project=64ea6567e57f4a43d7f9&mode=admin"
            : (name === 'Slack') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c0313b28f776aee80/view?project=64ea6567e57f4a43d7f9&mode=admin"
                : (name === 'Salesforce') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c030c889495243e1b/view?project=64ea6567e57f4a43d7f9&mode=admin"
                    : (name === 'Sage') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c03059d9b173ece3b/view?project=64ea6567e57f4a43d7f9&mode=admin"
                        : (name === 'Quickbooks') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02fdac052555faa2/view?project=64ea6567e57f4a43d7f9&mode=admin"
                            : (name === 'Outlook') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02f683ff295e85da/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                : (name === 'Netsuite') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02ef64bf25a95a4d/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                    : (name === 'Teams') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02e958ffe2691112/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                        : (name === 'Hubspot') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02d2e42af34e938a/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                            : (name === 'Epicor') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02ca85af8d2c86fd/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                : (name === 'Gusto') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02ba2c42b2988eb7/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                    : (name === 'Docusign') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c02a0e00103896220/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                        : (name === 'Syspro') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c03194fe5ae3cf73a/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                            : (name === 'Vendr') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/660c032095dd3adc7936/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                                : (name === 'Zip') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/6648bc140033cd84c981/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                                    : (name === 'Coupa') ? "https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/6648bbff00345de1ad37/view?project=64ea6567e57f4a43d7f9&mode=admin"
                                                                        : "Gmail";
    return iconPath;
};
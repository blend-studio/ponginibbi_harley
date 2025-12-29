using System.Collections.Generic;

namespace PublisherModels
{
    // Questa classe serve solo per deserializzare il JSON principale
    public class RootData
    {
        public List<Vehicles> Ads { get; set; }
    }
}
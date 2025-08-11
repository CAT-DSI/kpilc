using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CATLCR_BackEnd.Data
{
    public abstract class EntityBase
    {
        [Key]
        public Guid Id { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; }
    }
}
